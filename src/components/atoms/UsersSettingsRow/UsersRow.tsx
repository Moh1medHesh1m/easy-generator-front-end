/* eslint-disable no-param-reassign */
/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
/* eslint-disable no-underscore-dangle */
import { Avatar, Button, Checkbox, Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import DropDownField from '@/components/atoms/DropDownField/RolesDropDownField';
import { useAppDispatch } from '@/lib/hooks';
import { settingsThunks } from '@/lib/redux/features/settings.slice';
import type { IError } from '@/lib/requests/errors';
import { UserCompanyStatus, UserTrackingType } from '@/lib/types/company.type';
import type { UserSettingFormData } from '@/lib/types/invite.type';
import type { User } from '@/lib/types/user.type';

function UserSettingsRow({ user }: { user: User }) {
  const methods = useForm<UserSettingFormData>({
    mode: 'onSubmit',
    // resolver: yupResolver(Usersse),
    defaultValues: {
      allowedIdleTime: user.companies[0]?.allowedIdleTime,
      editTime: user.companies[0]?.editTime,
      role: user.companies[0]?.role,
      trackingType: user.companies[0]?.trackingType,
      takeScreenshot: user.companies[0]?.takeScreenshot,
    },
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;
  const roleWatch = watch('role');
  const takeScreenshotWatch = watch('takeScreenshot');
  const allowedIdleTimeWatch = watch('allowedIdleTime');
  const trackingTypeWatch = watch('trackingType');
  const editTimeWatch = watch('editTime');
  const [submit, setsubmit] = useState(false);
  useEffect(() => {
    let defaultValues: UserSettingFormData | undefined;
    if (user.companies[0]) {
      const { role, takeScreenshot, allowedIdleTime, trackingType, editTime } =
        user.companies[0];
      defaultValues = {
        role,
        takeScreenshot,
        allowedIdleTime,
        trackingType,
        editTime,
      };
    }
    const watchvalues = {
      role: roleWatch,
      takeScreenshot: takeScreenshotWatch,
      allowedIdleTime: allowedIdleTimeWatch,
      trackingType: trackingTypeWatch,
      editTime: editTimeWatch,
    };
    setsubmit(JSON.stringify(watchvalues) !== JSON.stringify(defaultValues));
  }, [
    roleWatch,
    takeScreenshotWatch,
    allowedIdleTimeWatch,
    trackingTypeWatch,
    editTimeWatch,
  ]);

  useEffect(() => {
    setsubmit(false);
  }, [user._id]);
  const dispatch = useAppDispatch();
  const onSubmit = (data: UserSettingFormData) => {
    data._id = user._id;
    dispatch(settingsThunks.updateUserSettings(data))
      .then(() => setsubmit(false))
      .catch((err: IError) => err.handle());
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          className="flex flex-col gap-4"
          id={user.email}
          onSubmit={handleSubmit(onSubmit)}
        ></form>
      </FormProvider>

      <Table.Row
        className="bg-white dark:border-gray-700 dark:bg-gray-800"
        key={user._id}
      >
        <Table.Cell>
          <div className="flex flex-wrap items-center gap-5">
            <Avatar
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
            {user.name ?? user.email}
          </div>
        </Table.Cell>
        <Table.Cell>
          {user.companies[0]?.role === 'Owner' ? (
            <span>{user.companies[0]?.role}</span>
          ) : (
            <DropDownField
              defaultValue={0}
              register={register('role')}
              errorMessage={errors.role?.message}
            />
          )}
        </Table.Cell>

        <Table.Cell>
          <div className="flex justify-center">
            <div>
              <input
                className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                {...register('takeScreenshot', {})}
              />
            </div>
          </div>
        </Table.Cell>
        <Table.Cell>
          <div className="flex justify-center">
            <div>
              <input
                className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                {...register('editTime', {})}
              />
            </div>
          </div>
        </Table.Cell>

        <Table.Cell>
          <input
            className="w-20 rounded-lg border border-black"
            placeholder={
              (user.companies[0]?.allowedIdleTime &&
                user.companies[0]?.allowedIdleTime.toString()) ||
              ''
            }
            {...register('allowedIdleTime', {})}
          />
        </Table.Cell>
        <Table.Cell>
          <select
            defaultValue={user.companies[0]?.role}
            {...register('trackingType', {})}
            className="mb-3 rounded "
          >
            <option value={UserTrackingType.WEB}> Web</option>
            <option value={UserTrackingType.DESKTOP}>Desktop</option>
            <option value={UserTrackingType.BOTH}>Both</option>
          </select>
        </Table.Cell>
        <Table.Cell>
          <div className="flex items-center gap-2">
            <Checkbox
              disabled
              checked
              className={`h-4 w-4 rounded border-gray-300 bg-gray-100 ${
                user.companies[0]?.status === UserCompanyStatus.ACTIVE
                  ? ' text-succes-light'
                  : 'text-pink-300'
              } focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-succes-light dark:ring-offset-succes-light dark:focus:ring-blue-600`}
            />
            {user.companies[0]?.status}
          </div>
        </Table.Cell>
        <Table.Cell>
          {submit && (
            <Button
              type="submit"
              form={user.email}
              className=" flex items-center rounded-lg border border-gray-300 bg-slate-700 px-5  text-white  hover:text-cyan-900 focus:outline-none"
            >
              update
            </Button>
          )}
        </Table.Cell>
      </Table.Row>
    </>
  );
}

export default UserSettingsRow;
