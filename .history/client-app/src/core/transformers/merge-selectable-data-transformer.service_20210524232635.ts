import { Injectable } from '@angular/core';
import { MergeReferenceDataTransformer } from '@libs/core/transformers/merge-reference-data-transformer.service';
import { SelectableListItem } from '@libs/core/models/selectable-listItem.model';
import { DataCompareConfigurations } from '@libs/core/transformers/data-compare-transformer.service';
// import { isArray } from 'util';
// import { any } from '@venues/venues-shared/models/base-listing-item.models';
// import { Identifiable } from '@libs/core/models/identifiable.model';
@Injectable({
    providedIn: 'root'
})

export class MergeSelectableDataTransformer implements
    MergeReferenceDataTransformer<any, string, SelectableListItem<any>> {
    config: DataCompareConfigurations = {
        added: false,
        edited: false,
        deleted: false,
        attached: false,
        detached: false,
        baseAttr: 'id'
    };

    baseAttr = this.config.baseAttr;

    transform(tReference: any[], dataToTransform: string[] | string, config?: DataCompareConfigurations): SelectableListItem<any>[] {
        if (config) {
            this.config = { ...this.config, ...config };
            this.baseAttr = this.config.baseAttr;
        }
        const selectableItems: SelectableListItem<any>[] = [];
        tReference.forEach((item: any) => {
            selectableItems.push({
                data: item,
                isSelected: Array.isArray(dataToTransform)?
                dataToTransform.includes(item[this.baseAttr]):
                item[this.baseAttr] === dataToTransform
            });
        });
        return selectableItems;
    };
}
