import {Injectable} from '@angular/core';
import {MergeSelectableDataTransformer} from '@core/transformers/merge-selectable-data-transformer.service';
import {SplitSelectableDataTransformer} from '@core/transformers/split-selectable-data-transformer.service';
// import {RepeatableCompareDataTransformer} from '@core/transformers/repeatable-compare-transformer.service';
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
