import React from 'react'
import { useForm } from 'react-hook-form';
import useChangeUserStatus from './useChangeUserStatus';
import RHFSelect from '../../../ui/RHFSelect';
import Loading from '../../../ui/Loading';
import { useQueryClient } from '@tanstack/react-query';
import Button from '../../../ui/Button';

const options = [
          {
            label: "رد شده",
            value: 0,
          },
          {
            label: "در انتظار تایید",
            value: 1,
          },
          {
            label: "تایید شده",
            value: 2,
          },
        ];
const ChangeUserStatus = ({ userId, onClose }) => {
          // const { id: userId } = useParams();
          const { register, handleSubmit } = useForm();
          const { changeUserStatus, isUpdating } = useChangeUserStatus();
          const queryClient = useQueryClient();
          const onSubmit = (data) => {
            changeUserStatus(
              {  userId, data },
        
              {
                onSuccess: () => {
                  onClose();
                  queryClient.invalidateQueries({ queryKey: ["users"] });
                },
              }
            );
          };
          return (
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="w-96 ">
                <RHFSelect
                  name="status"
                  label="تغییر وضعیت"
                  register={register}
                  required
                  options={options}
                />
                <div className='!mt-8'>
                  {isUpdating ? (
                    <Loading/>
                  ) : (
                    <Button
                      type={"submit"}
                      className="btn btn--primary w-full mt-12"
                      title={"تایید"}
                    />
                  )}
                </div>
              </form>
            </div>
          );
}

export default ChangeUserStatus