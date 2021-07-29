import {SimpleDataTransformer} from '@core/transformers/simple-data-transformer.service';
import {Featurable} from '@core/models/featurable.model';
import {FeaturableSeparation} from '@core/models/featurable-separation.model';

export class SplitFeaturableDataTransformer implements SimpleDataTransformer<Featurable, FeaturableSeparation> {
    transform(tReference: Featurable[]): FeaturableSeparation {
        const splitResult: FeaturableSeparation = {
            featured: [],
            notFeatured: [],
            all: []
        };
        tReference.forEach((item: Featurable) => {
            if(item.isFeatured) {
                splitResult.featured.push(this.removeIsFeaturedProperty(item));
            }
            else {
                splitResult.notFeatured.push(this.removeIsFeaturedProperty(item));
            }
            splitResult.all.push(this.removeIsFeaturedProperty(item));
        });
        return splitResult;
    }

    removeIsFeaturedProperty(item: Featurable) {
        const newItem = item;
        delete newItem.isFeatured;
        return newItem;
    }
}
