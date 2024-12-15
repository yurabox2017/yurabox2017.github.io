import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/features/store/store';

const UserProfile = () => {
  const profile = useSelector((s: RootState) => s.user.userData);

  return (
    <div className="container rounded mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="businessman (1).png"
            />
            <span className="font-weight-bold"></span>
            <span className="text-black-50"></span>
            <span> </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Профиль</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Имя</label>
                <input type="text" className="form-control" placeholder="Имя" defaultValue={profile.profile?.firstName} />
              </div>
              <div className="col-md-6">
                <label className="labels">Фамилия</label>
                <input type="text" className="form-control" defaultValue={profile.profile?.lastName} placeholder="Фамилия" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Мобильный телефон</label>
                <input type="text" className="form-control" placeholder="введите телефон" defaultValue={profile.profile?.phone} />
              </div>
              <div className="col-md-12">
                <label className="labels">Email</label>
                <input type="text" className="form-control" placeholder="введите email" defaultValue={profile.profile?.email} />
              </div>
            </div>
            <div className="mt-5 text-center">
              <button className="btn btn-primary profile-button" type="button">
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
