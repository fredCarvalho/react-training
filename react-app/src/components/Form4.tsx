import React, { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    description: z.string().min(3, {message: "Category must be at least 3 characters"}),
    amount: z.number({ invalid_type_error: "Amount field is required."}),
    category: z.string().min(3, {message: "Category is required"})
});

type FormData = z.infer<typeof schema>;

const Form4 = () => {

  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm<FormData>({resolver: zodResolver(schema)});

const onSubmit = (data: FieldValues) => {
    console.log(data);
}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label htmlFor="description">Description</label>
            <input type="text" id="description" className="form-control" {...register("description")} />
            {errors.description && <p className="text-danger">{errors.description.message}</p>}
        </div>
        <div className="mb-3">
            
        </div>
    </form>>
  )
}

export default Form4