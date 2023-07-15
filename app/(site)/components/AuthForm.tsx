'use client';

import {useCallback, useState} from "react";
import {useForm, FieldValues, SubmitHandler} from "react-hook-form";
import Input from "@/app/components/input/Input";

type Variant = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN')
    const [isLoading, setIsLoading] = useState(false)

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER')
        } else {
            setVariant('LOGIN')
        }
    }, [variant])

    const {
        register, handleSubmit, getValues, formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = data => {
        setIsLoading(true)

        if (variant === 'REGISTER') {
            //Axios Register
        }

        if (variant === 'LOGIN') {
            // NextAuth SignIn
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true)

        //NextAuth Social Sign In
    }

    return (
        <div className={'sm:max-auto sm:w-full sm:max-w-md mt-8'}>
            <div className={"sm:rounded-lg sm:px-10 bg-white px-4 py-8 shadow"}>
                <form className={"space-y-6"}
                      onSubmit={handleSubmit(onSubmit)}>
                    <Input id={"email"} label={"Email"} register={register}/>
                </form>

            </div>
        </div>
    );
};

export default AuthForm;