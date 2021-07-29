import { DataCompareTransformer } from '@libs/core/transformers/data-compare-transformer.service';
import { BaseListingItem } from '@libs/shared/models/base-listing-item.models';

export class ReferenceInterSectionCompareTransformer implements
    DataCompareTransformer<BaseListingItem, string, BaseListingItem[]> {
    transform(source: BaseListingItem[], ids: string[]): BaseListingItem[] {
        const data: BaseListingItem[] = [];
        ids.forEach((id: string) => {
            const listItem = source.find(item => item.id === id);
            if (listItem) {
                data.push(listItem);
            }
        });
        return data;
    }
}
