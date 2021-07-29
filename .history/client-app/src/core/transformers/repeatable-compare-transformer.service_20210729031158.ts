import { Injectable } from '@angular/core';
import { DataCompareTransformer, DataCompareConfigurations } from '@core/transformers/data-compare-transformer.service';
import { RepeatableSeparation } from '@core/models/repeatable-separation.model';
import * as _ from 'lodash';
@Injectable({
    providedIn: 'root'
})

export class RepeatableCompareDataTransformer
    implements DataCompareTransformer<any, any, RepeatableSeparation<any>>
{
    config: DataCompareConfigurations = {
        added: true,
        edited: true,
        deleted: true,
        attached: true,
        detached: true,
        baseAttr: 'id',
        obligatoryAttr: []
    };

    baseAttr = 'id';

    transform(updated: any[], source: any[], config: DataCompareConfigurations = this.getDefaultConfig()): RepeatableSeparation<any> {
        const repeatableSeparation = {} as RepeatableSeparation<any>;
        this.config = { ...this.config, ...config };
        this.baseAttr = this.config.baseAttr;
        if (this.config.added) {
            repeatableSeparation.added = [];
        }

        if (this.config.edited) {
            repeatableSeparation.edited = [];
        }

        if (this.config.deleted) {
            repeatableSeparation.deleted = [];
        }

        source.forEach((item, i) => {
            if (this.isDeleted(item, updated) === false && this.config.deleted) {
                repeatableSeparation.deleted.push(item[this.baseAttr]);
            }
            const editedItemIndex: number = this.isEdited(item, updated);
            if (editedItemIndex !== -1 && this.config.edited) {
                const changedValues = this.getChangedValues(updated[editedItemIndex], source[i]);
                if(!_.isEmpty(changedValues)) {
                    repeatableSeparation.edited.push(changedValues);
                }
            }
        });
        if (this.config.added) {
            repeatableSeparation.added = this.addedItems(updated, source);
        }
        return repeatableSeparation;
    };


    isDeleted(item: any, updatedList: any[]): boolean {
        let find = false;
        updatedList.forEach((e) => {
            if (e[this.baseAttr] === item[this.baseAttr]) {
                find = true;
            }
        });
        return find;
    }

    isEdited(oldItem: any, updatedList: any[]): number {
        let index = -1;
        updatedList.forEach((newItem, i) => {
            if (newItem[this.baseAttr] === oldItem[this.baseAttr]) {
                Object.keys(oldItem).forEach((key: string) => {
                    if (oldItem[key as keyof typeof oldItem] !== newItem[key as keyof typeof newItem]) {
                        index = i;
                    }
                });
            }
        });
        return index;
    }

    addedItems(updatedList: any[], source: any[]) {
        const added: any[] = [];
        updatedList.forEach((item) => {
            if (item[this.baseAttr] === null || this.isAdded(item, source)) {
                added.push(item);
            }
        });
        //Remove ids if exists in the final added value
        added.forEach((item: any) => {
            delete item?.id;
        });
        return added;
    }

    isAdded(element: any, source: any[]): boolean {
        let isAdded = true;
        source.forEach((item) => {
            if (item[this.baseAttr] === element[this.baseAttr]) {
                isAdded = false;
            }
        });
        return isAdded;
    }

    getChangedValues(updatedItem: any, sourseItem: any): any {
        let changedValues: any = {};
        const obligatoryValues: any = {};
        Object.keys(sourseItem).forEach((key) => {
            if (!_.isEqual(sourseItem[key as keyof typeof sourseItem], updatedItem[key as keyof typeof updatedItem])) {
                changedValues[key as keyof typeof changedValues] = updatedItem[key as keyof typeof updatedItem];
            }
            else {
                if(key && this.config.obligatoryAttr.includes(key)) {
                    obligatoryValues[key as keyof typeof changedValues] = updatedItem[key as keyof typeof updatedItem];
                }
            }
        });
        if(!_.isEmpty(changedValues)) {
            changedValues[this.baseAttr] = updatedItem[this.baseAttr];
            changedValues = (!_.isEmpty(obligatoryValues)? {...changedValues, ...obligatoryValues} : changedValues);
        }
        return changedValues;
    }

    getDefaultConfig(): DataCompareConfigurations {
        return {
            added: true,
            edited: true,
            deleted: true,
            attached: true,
            detached: true,
            baseAttr: 'id',
            obligatoryAttr: []
        };
    }
}
