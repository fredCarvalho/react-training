import React, { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod for form validation
const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  age: z
    .number({ invalid_type_error: "Age field is required." })
    .min(18, { message: "Age must be at least 18." }),
});

type FormData = z.infer<typeof schema>;

// interface FormData {
//   name: string;
//   age: number;
// }

const Form3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );

  // return (
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     <div className="mb-3">
  //       <label htmlFor="name" className="form-label">
  //         Name
  //       </label>
  //       <input
  //         {...register("name", { required: true, minLength: 3 })}
  //         id="name"
  //         type="text"
  //         className="form-control"
  //       />
  //       {errors.name?.type === "required" && (
  //         <p className="text-danger">The name field is required</p>
  //       )}
  //       {errors.name?.type === "minLength" && (
  //         <p className="text-danger">The name must be at least 3 characters</p>
  //       )}
  //     </div>
  //     <div className="mb-3">
  //       <label htmlFor="age" className="form-label">
  //         Age
  //       </label>
  //       <input
  //         {...register("age")}
  //         id="age"
  //         type="number"
  //         className="form-control"
  //       />
  //     </div>
  //     <button className="btn btn-primary" type="submit">
  //       Submit
  //     </button>
  //   </form>
  // );
};

export default Form3;
