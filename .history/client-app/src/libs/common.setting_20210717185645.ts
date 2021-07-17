import { InjectionToken } from '@angular/core';

export const WINDOW_REF = new InjectionToken('WINDOW_REF');
export const DOCUMENT_REF = new InjectionToken('DOCUMENT_REF');
export const applicationDateFormat = 'YYYY-MM-DDThh:mm:ss.sTZD';
export const applicationDateRegex = RegExp(
  '(((0[1-9])|[1-2][0-9])|(3[0-1]))/((1[0-2])|(0[1-9]))/[0-9]{4}');
export const urlRegex = RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
export const phoneRegex = RegExp(/\+?\d+/);
export const englishLetterRegex = RegExp(/^[-a-zA-ZÀ-ÿÄÖÜäöüß'0-9_ &, \.\-()\/\:]+$/);
export const minPhoneNumberLength = 6;
export const currencyDefaultFormat = '2.2-2';

export const LongDateTime = 'dddd, DD MMM YYYY : hh:mm';
export const DefaultDateFormat = 'dddd, DD MMM YYYY';


export const errorCodeResponses: { [code: number]: string } = {
  // unknownError
  0: 'core.errors.unexpectedError' ,
  1: 'core.errors.userIsNotAuthorized' ,
  2: 'core.errors.venueIsNotFound' ,
  3: 'core.errors.policyAlreadyAddedToVenue',
  4: 'core.errors.policyNotFound',
  5: 'core.errors.taxAlreadyExist',
  6: 'core.errors.customTaxAlreadyExist',
  7: 'core.errors.fileNotFound',
  8: 'core.errors.invalidValue',
  9: 'core.errors.invalidNumber',
  10: 'core.errors.taxCategoryAlreadyExist',
  11: 'core.errors.customTaxCategoryAlreadyExist',
  12: 'core.errors.invalidNameLength',
  13: 'core.errors.categoryNotFound',
  50: 'core.errors.invalidIdForProperty',

  // 1000-1039 For venues
  1000: 'core.errors.venueNameIsNotFound',
  1001: 'core.errors.invalidVenueType',
  1002: 'core.errors.invalidOffersCateringValue',
  1003: 'core.errors.invalidOffersGroupAccommodationValue',
  1004: 'core.errors.invalidOffersSpacesValue',
  1005: 'core.errors.invalidOffersWorkspacesValue',
  1006: 'core.errors.listOfVibesIsNotFound',
  1007: 'core.errors.addressIsNotFound',
  1008: 'core.errors.venueAlreadyActivated',
  1009: 'core.errors.venueShouldHaveEnquiries',
  1010: 'core.errors.openingHoursShouldFulfilled',
  1011: 'core.errors.cateringNotConfigSelectedVenue',
  1012: 'core.errors.shouldAddLeastOneBedrooms',
  1013: 'core.errors.shouldAddLeastOneActiveSpace',
  1014: 'core.errors.venueFeaturePhotoRequired',
  1015: 'core.errors.venueAlreadyDeactivated',
  1016: 'core.errors.canNotUpdateVenueGallery',

// 1040-1049 For venue sustainability
  1040: 'core.errors.greenTourismValueIsNotFound',

// 1050-1099 For venue opening hours
  1050: 'core.errors.oneDayAssignedToWorkingHours',
  1051: 'core.errors.startingHourShouldBeSpecified',
  1052: 'core.errors.closingHourShouldBeSpecified',
  1053: 'core.errors.dayAssignedToWorkingHours',
  1054: 'core.errors.selectedDaysShouldBeDistinct',

// 1100 - 1119 For venue info
  1100: 'core.errors.michelinStarsValueIsNotFound',

// 1120 - 1149 For venue bedroom
  1120: 'core.errors.addedBedroomTypesShouldBeDistinct',

// 1150 - 1199 For venue additional info
  1150: 'core.errors.onSiteParkingTypeIsNotFound',

// 1200 - 1249 For space info
  1200: 'core.errors.privacyTypeNotFound',
  1201: 'core.errors.accessibilityValueNotFound',
  1202: 'core.errors.measurementUnitNotFound',
  1203: 'core.errors.invalidMeasurements',
  1204: 'core.errors.spaceNameNotFound',
  1205: 'core.errors.spacePrivacyTypeNotFound',
  1206: 'core.errors.spaceAccessibilityNotFound',
  1207: 'core.errors.spaceMeasurementUnitNotFound',
  1208: 'core.errors.spaceFloorIdNotFound',
  1209: 'core.errors.spaceVibeIdNotFound',
  1210: 'core.errors.canNotUpdateSpaceGallery',

  // 1250-1299 For space opening hours
   1250: 'core.errors.OneDayAssignedToWorkingHours',
   1251: 'core.errors.startingHourShouldBeSpecified',
   1252: 'core.errors.closingHourShouldBeSpecified',
   1253: 'core.errors.dayAssignedToMoreWorkingHours',
   1254: 'core.errors.invalidStartHourValue',
   1255: 'core.errors.invalidEndHourValue',

   // 1300 - 1349 SpaceLayout
   1300: 'core.errors.invalidMinimumCapacity',
   1301: 'core.errors.invalidMinimumCovidCapacity',
   1302: 'core.errors.invalidMaximumCapacity',
   1303: 'core.errors.invalidMaximumCovidCapacity',
   1304: 'core.errors.isCovidActiveNotFound',
   1305: 'core.errors.layoutTypeIdNotFound',

// 1401 - 1450 For Address
   1401: 'core.errors.addressLine1Required',
   1402: 'core.errors.addressLine2ValidLength',
   1403: 'core.errors.postalCodeRequired',
   1404: 'core.errors.cityNameRequired',
   1405: 'core.errors.regionNameValidLength',
   1406: 'core.errors.countryIdRequired',
   1407: 'core.errors.placeIdRequiredInGeneralAddress',
   1408: 'core.errors.latitudeRequiredInGeneralAddress',
   1409: 'core.errors.longitudeRequiredInGeneralAddress',
   1410: 'core.errors.addressIdNotFound',
   1411: 'core.errors.cityNameShouldBeEdited',
   1412: 'core.errors.regionNameShouldBeEdited',
   1413: 'core.errors.venueCan\'tDeleteIt\'sGeneralAddress',
   1414: 'core.errors.venueCan\'tEditIt\'sGeneralAddress',
   1415: 'core.errors.addressesOperationShouldNotBeNull',
   1416: 'core.errors.AnotherBillingAddressNotAllowed',
   1417: 'core.errors.regionNameShouldBeValid',

   1425: 'core.errors.attractionNameNotFound',
   1426: 'core.errors.attractionAddressNotFound',
   1451: 'core.errors.contactContentNotFound',

   1475: 'core.errors.cancellationTitleMustBeSpecified',
   1480: 'core.errors.invalidCancellationPolicyScope',
   1481: 'core.errors.invalidCancellationPricingModel',
   1482: 'core.errors.invalidCancellationBlackoutDays',
   1483: 'core.errors.invalidCancellationPercentage',

//1500 - 1549 for commission policy
   1500: 'core.errors.invalidValueForCommissionRate',
   1501: 'core.errors.commissionTitleMustBeSpecified',
   1502: 'core.errors.oneCommissionShouldBeSpecified',
   1503: 'core.errors.invalidCommissionScope',
   1504: 'core.errors.invalidCommissionPaymentType',
   1505: 'core.errors.invalidCommissionPaymentTime',
   1506: 'core.errors.commissionNotForSpecificClients',
   1507: 'core.errors.oneClientShouldBeSpecified',

//1550 - 1599 for deposit policy
   1550: 'core.errors.depositPolicyTitleSpecified',
   1551: 'core.errors.invalidDepositPolicyScope',
   1552: 'core.errors.oneDepositRuleSpecified',

  //1600 - 1650 for tax policy
   1600: 'core.errors.invalidIsRatesInclusive',
   1601: 'core.errors.oneCustomTaxSpecified',
   1602: 'core.errors.invalidTaxPolicyCategory',
   1603: 'core.errors.invalidValueForTaxPolicy',
   1604: 'core.errors.invalidTaxPolicyType',
   1605: 'core.errors.customTaxPolicyNameSpecified',

//1650 - 1699 for term policy
   1650: 'core.errors.termPolicyTitleSpecified',
   1651: 'core.errors.invalidTermPolicyScope',

 //1700 - 1749 for allocation pricing
   1700: 'core.errors.allocationNameMustBeSpecified',
   1701: 'core.errors.incorrectAllocationWindowRange',
   1702: 'core.errors.specifyOneClientForAllocationPricing',
   1703: 'core.errors.specifyOneSpaceForAllocationPricing',
   1704: 'core.errors.invalidClientList',
   1705: 'core.errors.invalidSpaceList',

  //1750 - 1799 for space hire
   1750: 'core.errors.spacePricingHaveOneDay',
   1751: 'core.errors.incorrectSpaceHirePriceRange',
   1752: 'core.errors.specifySpaceHireRates',
   1753: 'core.errors.cannotChooseFlexibleRates',
   1754: 'core.errors.invalidValueForSpaceHireRate',
   1755: 'core.errors.publishedSpaceHireNotForClients',
   1756: 'core.errors.specifyOneClientForSpaceHire',
   1757: 'core.errors.specifyOneSpaceForSpaceHire',
   1758: 'core.errors.specifyOnePriceForSpaceHire',
   1759: 'core.errors.spaceHireHaveOnlyOnePrice',
   1760: 'core.errors.invalidSpaceHireScope',

   //1800 - 1849 for group accommodation
   1800: 'core.errors.bedRoomPricingHaveOneDay',
   1801: 'core.errors.incorrectBedRoomPriceRange',
   1802: 'core.errors.invalidGroupAccommodationRateType',
   1803: 'core.errors.accommodationPricingNotForClients',
   1804: 'core.errors.incorrectMinimumNumberOfRooms',
   1805: 'core.errors.specifyFlexibleRatePercentage',
   1806: 'core.errors.incorrectFlexibleRatePercentage',
   1807: 'core.errors.specifyOneClientForAccommodation',
   1808: 'core.errors.ratePercentageNotForAccommodation',
   1809: 'core.errors.specifyOnePriceForAccommodation',
   1810: 'core.errors.specifyIfAccommodationHasRates',

   //1850 - 1869 for Employee
   1850: 'core.errors.employeeFirstNameIsNotFound',
   1851: 'core.errors.employeeLastNameIsNotFound',
   1852: 'core.errors.employeeEmailIsNotFound',

   //1900 - 1949 for Business relations
   1900: 'core.errors.accountCannotBeOperated',
   1901: 'core.errors.failedToRetrieveAccount',
   1902: 'core.errors.failedToRetrieveIntermediary',
   1903: 'core.errors.failedToAddBusinessRelation',
   1904: 'core.errors.failedToRetrieveAccountRelations',
   1905: 'core.errors.requestedRelationAlreadyExists',
   1906: 'core.errors.organizationAlreadyOperated',

   // 2000 - ???? For Common
   2000: 'core.errors.itemNotFound',
   2001: 'core.errors.oneItemShouldBeUpdated',
   2002: 'core.errors.startDateEarlierThanEndDate',
   2003: 'core.errors.startingTimeEarlierThanEndTime',
   2004: 'core.errors.invalidDate',
   2005: 'core.errors.conflictingListOfDates',
   2006: 'core.errors.everyItemChosenOnce',
   2007: 'core.errors.invalidLengthOfAProperty',
   2008: 'core.errors.dateMustBeInTheFuture',
   2009: 'core.errors.invalidEmailAddress',
   2010: 'core.errors.nameIsRequired',
   2011: 'core.errors.invalidTime',
   2012: 'core.errors.invalidCategoryForPolicy',
   2013: 'core.errors.oneSeasonShouldBeSpecified',
   2014: 'core.errors.objectNotFound',
   2015: 'core.errors.objectAlreadyExist',
   2016: 'core.errors.objectAlreadyInUse',
   2017: 'core.errors.invalidDtoToAdd',
   2018: 'core.errors.invalidPageSize',
   2019: 'core.errors.invalidPageNumber',
   2020: 'core.errors.oneSpaceShouldBeSelected',
   2021: 'core.errors.invalidDateAndTimeValue',
   2022: 'core.errors.invalidUpdateOperation',

  // Attachments 3000-3049
  3000: 'core.errors.couldNotUploadFiles',
  3001: 'core.errors.couldNotUploadEmptyFiles',
  3002: 'core.errors.configContainContainerName',
  3003: 'core.errors.configContainConnectionString',
  3004: 'core.errors.couldNotCreateStorageAccount',

  // Activation token 3050-3099
  3050: 'core.errors.invalidToken',
  3051: 'core.errors.activationTokenNotFound',
  4000: 'core.errors.invalidIndexForItem',


  //5000 - 6000 Booking

   //5000 - 5049 For Proposal
  5000: 'core.errors.invalidHoldOption',
  5001: 'core.errors.invalidProposalMethod',
  5002: 'core.errors.invalidProposalDiscount',
  5003: 'core.errors.invalidProposalTotalValue',
  5004: 'core.errors.invalidProposalCostNumberOfItems',
  5005: 'core.errors.invalidProposalCostPublishedRate',
  5006: 'core.errors.invalidProposalCostItemOffer',
  5007: 'core.errors.invalidProposalCostItemTotal',
  5008: 'core.errors.cannotHaveEmptyTitleInExtra',
  5009: 'core.errors.cannotHaveEmptyTitleInOptional',
  5010: 'core.errors.errorSpecifyingCateringServingPlace',
  5011: 'core.errors.invalidPackagePerPersonCost',
  5012: 'core.errors.calculationErrorInProposalCosts',
  5013: 'core.errors.invalidVenueRequestStatus',
  5014: 'core.errors.proposalValueExceedBudget',
  5015: 'core.errors.proposalRequirementsNotMatchRequestRequirements',
  5016: 'core.errors.invalidProposalCounterOfferValue',
  5017: 'core.errors.invalidValueForProposal',
  5018: 'core.errors.invalidVatAndWithoutVat',
  5019: 'core.errors.invalidTotalValuesProposalSummary',
  5020: 'core.errors.invalidProposalTotalSaving',
  5021: 'core.errors.missingProposalDetails',
  5022: 'core.errors.missingProposalDailyRequirements',
  5023: 'core.errors.invalidProposalCostItemType',

  //5050 - 5100 for request
  5050: 'core.errors.invalidRequestType',
  5051: 'core.errors.invalidCurrencyId',
  5052: 'core.errors.invalidBedroomStyleValue',
  5053: 'core.errors.invalidBedroomTypeId',
  5054: 'core.errors.invalidMaximumRoomsForBedrooms',
  5055: 'core.errors.invalidMinimumRoomsForBedrooms',
  5056: 'core.errors.minimumRoomsLessThanMaximumRooms',
  5057: 'core.errors.invalidNightsForBedrooms',
  5058: 'core.errors.invalidEventTypeId',
  5059: 'core.errors.invalidEventDays',
  5060: 'core.errors.invalidMaximumPeopleForEvent',
  5061: 'core.errors.invalidMinimumPeopleForEvent',
  5062: 'core.errors.minimumPeopleLessThanMaximumPeople',
  5063: 'core.errors.invalidBudgetMethodValue',
  5064: 'core.errors.invalidMinimumRequestBudget',
  5065: 'core.errors.invalidMaximumRequestBudget',
  5066: 'core.errors.budgetMinimumLessThanMaximum',
  5067: 'core.errors.invalidCommissionRateType',
  5068: 'core.errors.invalidCommissionRatePercentage',
  5069: 'core.errors.invalidMaximumPeopleForCatering',
  5070: 'core.errors.invalidMinimumPeopleForCatering',
  5071: 'core.errors.minPeopleLessThanMaxPeopleCatering',
  5072: 'core.errors.invalidCateringTypeId',
  5073: 'core.errors.invalidCateringStyleId',
  5074: 'core.errors.invalidMaximumPeopleForSpaces',
  5075: 'core.errors.invalidMinimumPeopleForSpaces',
  5076: 'core.errors.minPeopleLessThanMaxPeopleSpaces',
  5077: 'core.errors.invalidClientIndustryTypeId',
  5078: 'core.errors.invalidClientTypeId',
  5079: 'core.errors.invalidLatitudeValue',
  5080: 'core.errors.invalidLongitudeValue',
  5081: 'core.errors.invalidCountryId',
  5082: 'core.errors.invalidRequestRadiusValue',
  5083: 'core.errors.invalidMaxNumberRequestProposal',
  5084: 'core.errors.invalidNumberVenuesInRequest',
  5085: 'core.errors.invalidEventInfoEventRequest',
  5086: 'core.errors.noEventInfoAccommodationRequest',
  5087: 'core.errors.invalidWizardDailyRequirement',
  5088: 'core.errors.invalidRequest',
  5089: 'core.errors.invalidRequestSettings',
  5090: 'core.errors.invalidDailyRequirementCount',
  5091: 'core.errors.accommodationNotContainRequirement',
  5092: 'core.errors.oneLocationSpecifiedRequest',
  5093: 'core.errors.decisionDateBiggerThanExpiryDate',
  5094: 'core.errors.orgRequestNotContainClientInfo',
  5095: 'core.errors.clientTypeNotContainIndustryType',
  5096: 'core.errors.clientTypeContainIndustryType',
  5098: 'core.errors.intermediaryRequestContainClientInfo',
  5099: 'core.errors.missingRequestSettings',
  5100: 'core.errors.missingRequestLocation',


  5900: 'core.errors.missingCostItemForObject',

  6000: 'core.errors.userNotFound',
  6001: 'core.errors.emailAlreadyInUse',
  6002: 'core.errors.organisationUserNotFound',
  6003: 'core.errors.rolesOfRequestedListNotSupported',
  6004: 'core.errors.permissionsOfRequestedListNotSupported',
  6005: 'core.errors.currentUserCannotAccessThisEmployee',
  6006: 'core.errors.oneRoleShouldBeSelected',
  6007: 'core.errors.editEmailIsNotAllowed',
  6008: 'core.errors.oneVenueAccessShouldBeSelected',
  6009: 'core.errors.userShouldHaveOneRoleAfterUpdateRoles ',
  6010: 'core.errors.userShouldHaveOneVenueAccess',
  6011: 'core.errors.userShouldAddOneRole',
  6012: 'core.errors.userShouldAddOneVenueAccess',
  6013: 'core.errors.cannotAttachVenueAccesses',
  6014: 'core.errors.cannotDetachVenueAccesses',
  6015: 'core.errors.cannotChangeInvitationStatusVisited',
  6016: 'core.errors.cannotChangeInvitationStatusAccepted',

  6040: 'core.errors.failedToExtractDataFromFile',
  6041: 'core.errors.failedToAddContacts',
  6042: 'core.errors.contactEmailAlreadyAdded',
  6043: 'core.errors.unsupportedContactType',
  6044: 'core.errors.intermediaryCanAddOrgContact',
  6045: 'core.errors.companyCanAddOrgOrIntermediaryContact',
  6046: 'core.errors.failedToAddContact',
  6047: 'core.errors.addContactDtoNotValid',
  6048: 'core.errors.orgCannotAddNewContact',
  6049: 'core.errors.accountAlreadyExistsWithDifferentEntity',
  6050: 'core.errors.intermediaryCannotAddOrgContact',

  6100: 'core.errors.errorWhenTryToGetInvitation',
  6101: 'core.errors.invitationExpired',
  6102: 'core.errors.cannotInviteUserAlreadyExist',
  6103: 'core.errors.cannotInviteUserAlreadyInvited',
  6104: 'core.errors.errorWhenTryToAddInvitation',
  6105: 'core.errors.errorWhenTryToUpdateInvitation',
  6106: 'core.errors.contactAlreadyHasValidInvitation',
  6107: 'core.errors.userCannotEditInvitation',
  6108: 'core.errors.cannotAcceptUserInvitation',
  6109: 'core.errors.invalidInvitationStatusAccept',
  6110: 'core.errors.invalidInvitationStatusCreated',
  6111: 'core.errors.errorInvitationBecauseUserIsNull ',

  // Business Entity
  6200: 'core.errors.entityNameValidLength',
  6201: 'core.errors.entityWebsiteUrlValidLength',
  6202: 'core.errors.entityVatNumberValidLength',
  6203: 'core.errors.entityCompanySizeValidValue',
  6204: 'core.errors.entitySubTypeValidValueForType',
  6205: 'core.errors.entityIndustryTypeValidValueForType',

  999: 'core.errors.unknownError',
};

export const enum Feature {
  VenuesList = 'VenuesList',
  EditVenueInformation = 'EditVenueInformation'
}

export const OtherOptionValue = 'other';
export const OrganizationCustomerId = 4;

export const USCountryID = 228;
