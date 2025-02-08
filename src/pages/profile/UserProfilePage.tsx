import React from 'react';
import { OrderTable } from 'src/shared/ui/order/OrderTable';
import { Profile } from 'src/shared/ui/profile/Profile';

export const UserProfilePage = () => {
  return (
    <div className="d-flex align-items-start">
      <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button
          className="nav-link active"
          id="v-pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-profile"
          type="button"
          role="tab"
          aria-controls="v-pills-profile"
          aria-selected="false"
        >
          Профиль
        </button>
        <button
          className="nav-link"
          id="v-pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-home"
          type="button"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          Заказы
        </button>
      </div>
      <div className="tab-content w-100" id="v-pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="v-pills-profile"
          role="tabpanel"
          aria-labelledby="v-pills-profile-tab"
        >
          <Profile />
        </div>
        <div className="tab-pane fade " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
          <OrderTable />
        </div>
      </div>
    </div>
  );
};
