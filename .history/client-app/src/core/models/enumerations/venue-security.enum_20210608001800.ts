import { FeaturesEnum } from '@libs/core/models/enumerations/features.enum';
import { RolesEnum } from '@libs/core/models/enumerations/roles.enum';
import { PermissionEnum } from '@libs/core/models/enumerations/permissions.enum';

export const venueFeatureRoleDictionary = new Map<FeaturesEnum, RolesEnum[]>();
venueFeatureRoleDictionary.set(FeaturesEnum.VNUACM, [RolesEnum.AccountManager]);
venueFeatureRoleDictionary.set(FeaturesEnum.VNUBKM, [RolesEnum.BookingManager]);
venueFeatureRoleDictionary.set(FeaturesEnum.VNUCMP, [RolesEnum.CompanyInfoManager]);
venueFeatureRoleDictionary.set(FeaturesEnum.VNUVNM, [RolesEnum.ContentManager]);
venueFeatureRoleDictionary.set(FeaturesEnum.VNUEMP, [RolesEnum.EmployeesManager]);

export const venueFeaturePermissionDictionary = new Map<FeaturesEnum, PermissionEnum[]>();
venueFeaturePermissionDictionary.set(FeaturesEnum.VNUVNM, [PermissionEnum.AddVenue, PermissionEnum.VenueActivation]);
