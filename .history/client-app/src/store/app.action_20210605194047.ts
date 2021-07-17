import { createAction } from '@ngrx/store';

const editVenueInformation = createAction(
    '[Venues] Edit Venue Information',
    (venueInformation: any) => ({ venueInformation })
);

export const AppActions = {}