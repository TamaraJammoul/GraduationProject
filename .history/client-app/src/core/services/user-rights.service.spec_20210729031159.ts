import { configureTestSuite } from '@root/fakes/fakes.utils';
import { TestBed } from '@angular/core/testing';
import { FakesModule } from '@root/fakes/fakes.module';
import { UserRightsService } from '@core/services/user-rights.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { getIsUserStateFetched, getIsGroupManager } from '@core/store/core.selectors';
import { Feature } from '@libs/shared/settings/common.settings';
import { FakeState } from '@root/fakes/fake.state';

describe(UserRightsService.name, () => {
  let userRightsService: UserRightsService;
  let mockStore: MockStore;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [FakesModule],
      declarations: [],
      providers: [UserRightsService,
        provideMockStore({ initialState: new FakeState().value })]
    });
  });

  beforeEach(() => {
    userRightsService = TestBed.inject(UserRightsService);
    mockStore = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(userRightsService).toBeTruthy();
  });

  it('should return canAccess false if feature name is not in the featurs dictionary', () => {
    let result: boolean;
    userRightsService.canAccess('test' as Feature).subscribe(res => result = res);
    expect(result).toBe(false);
  });

  it('should return canAccess true if feature name is Venues and the user role is Venue admin', () => {
    let result: boolean;
    mockStore.overrideSelector(getIsUserStateFetched, true);
    mockStore.overrideSelector(getIsGroupManager, true);
    userRightsService.canAccess(Feature.VenuesList).subscribe(res => result = res);
    expect(result).toBe(true);
  });

});
