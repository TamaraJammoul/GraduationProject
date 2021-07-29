import { DataCompareTransformer, DataCompareConfigurations } from '@libs/core/transformers/data-compare-transformer.service';
import { SelecatableSerparation } from '@libs/core/models/selecatable-separation.model';

export class SplitSelectableDataTransformer implements
    DataCompareTransformer<any, any, SelecatableSerparation> {
    config: DataCompareConfigurations = {
        added: false,
        edited: false,
        deleted: false,
        attached: true,
        detached: true,
        baseAttr: 'isSelected'
    };

    baseAttr = this.config.baseAttr;

    identifiableAttr = 'id';

    setIdentifiableAttr(key: string) {
        this.identifiableAttr = key;
        return this;
    }

    transform(tReference: any[],
        dataToTransform: any[],
        config?: DataCompareConfigurations): SelecatableSerparation {

        if (config) {
            this.config = { ...this.config, ...config };
            this.baseAttr = this.config.baseAttr;
        }

        if (this.baseAttr !== null) {
            return this.ObjectsTransform(tReference, dataToTransform);
        }
        else {
            return this.simpleTransform(tReference, dataToTransform);
        }
    }

    ObjectsTransform(tReference: any, dataToTransform: any): SelecatableSerparation {
        const splitResult: SelecatableSerparation = {
            attached: [],
            detached: []
        };
        tReference.forEach((item: any) => {
            //Take the reference version
            const oldItem = dataToTransform.find((reference: any) =>
                reference.data[this.identifiableAttr] === item.data[this.identifiableAttr]);
            if ((oldItem !== undefined) && oldItem[this.baseAttr] !== item[this.baseAttr]) {
                if (item[this.baseAttr]) {
                    splitResult.attached.push(item.data[this.identifiableAttr]);
                }
                else {
                    splitResult.detached.push(item.data[this.identifiableAttr]);
                }
            }
        });
        return splitResult;
    }

    simpleTransform(tReference: any, dataToTransform: any): SelecatableSerparation {
        const splitResult: SelecatableSerparation = {
            attached: [],
            detached: []
        };
        tReference.forEach((item: any) => {
            if (!dataToTransform.includes(item)) {
                splitResult.attached.push(item);
            }
        });
        dataToTransform.forEach((item: any) => {
            if (!tReference.includes(item)) {
                splitResult.detached.push(item);
            }
        });
        return splitResult;
    }

}
