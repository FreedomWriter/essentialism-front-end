import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { putUser, deleteUser } from "../../store/actions/user.actions";

const EditProfile = ({ isSubmitting, values }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  useEffect(() => {}, []);

  const handleUpdate = () => {
    dispatch(
      putUser(
        {
          username: values.username || user.username,
        },
        user.id
      )
    );
  };

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
    localStorage.clear();
  };

  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder={user.username} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password" />
        <label htmlFor="verifyPassword" hidden>
          Verify Updated Password
        </label>
        {/* {touched.password && (
          <input
         
            component="input"
            type="password"
            name="verifyPassword"
            placeholder="Verify Updated Password"
          />
        )} */}

        <div>
          <button type="submit" onClick={handleDelete} disabled={isSubmitting}>
            delete me
          </button>
          <button type="submit" onClick={handleUpdate} disabled={isSubmitting}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
