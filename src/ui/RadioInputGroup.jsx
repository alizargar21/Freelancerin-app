import React from 'react'
import RadioInput from './RadioInput';

const RadioInputGroup = ({register , watch , errors , configs}) => {
          const {name , validationSchema ={} , options} = configs;

  return (
    <div>
          <div className="flex">
                    {options.map((option)=>(
                              <RadioInput
                              key={option.value}
                              label={option.label}
                              value={option.value}
                              id={option.value}
                              name={name}
                              register={register}
                              watch={watch}
                              validationSchema={validationSchema}
                              errors={errors}                             
                              
                              />
                    ))}
          </div>
          {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {" "}
          {errors[name]?.message}{" "}
        </span>
      )}
    </div>
  )
}

export default RadioInputGroup