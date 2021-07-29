import { Injectable } from '@angular/core';
import { MergeReferenceDataTransformer } from '@libs/core/transformers/merge-reference-data-transformer.service';
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
})

export class ObjectDataCompareTransformer implements
    MergeReferenceDataTransformer<any, any, any> {
    transform(tReference: any, dataToTransform: any ): any {
        const changedObjectProps: any = {};
        Object.keys(tReference).forEach((key: string) => {
            if(!_.isEqual(tReference[key], dataToTransform[key])) {
                changedObjectProps[key] = tReference[key];
            }
        });
        return changedObjectProps;
    }
}
