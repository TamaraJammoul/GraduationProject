import { MediaType } from '@libs/core/models/enumerations/media-type.enum';
export class Media {
  id: string;
  name: string;
  url: string;
  type?: MediaType;
  size?: number;
  contentType?: string;
}
