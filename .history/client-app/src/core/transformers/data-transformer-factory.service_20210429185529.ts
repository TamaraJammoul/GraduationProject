import {Injectable} from '@angular/core';
import {MergeSelectableDataTransformer} from '@libs/core/transformers/merge-selectable-data-transformer.service';
import {SplitSelectableDataTransformer} from '@libs/core/transformers/split-selectable-data-transformer.service';
// import {RepeatableCompareDataTransformer} from '@libs/core/transformers/repeatable-compare-transformer.service';
@Injectable({
    providedIn: 'root'
})

export class DataTransformer {
    constructor(private mergeSelectableDataTransformer: MergeSelectableDataTransformer,
                private splitSelectableDataTransformer: SplitSelectableDataTransformer,
                // private repeatableCompateDataTransformer: RepeatableCompareDataTransformer
                ) {/*Used for DI*/}

    create(transformerName: string) {
       if(transformerName === 'mergeSelectable') {
            return this.mergeSelectableDataTransformer;
       }
       else if(transformerName === 'splitSelectable') {
            return this.splitSelectableDataTransformer;
            // return this.mergeSelectableDataTransformer;
       }
    //    else if(transformerName === 'compareRepeatable') {
    //        return this.repeatableCompateDataTransformer;
    //    }
       else {
            return this.mergeSelectableDataTransformer;
       }
    }
}
