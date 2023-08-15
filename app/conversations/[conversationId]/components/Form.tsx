'use client'

import useConversation from "@/app/hooks/useConversation";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";
import {HiPhoto} from "react-icons/hi2";
import MessageInput from "@/app/conversations/[conversationId]/components/MessageInput";
import {HiPaperAirplane} from "react-icons/hi";
import {CldUploadButton} from "next-cloudinary"

const Form = () => {
    const {conversationId} = useConversation()

    const {
        register,
        handleSubmit,
        setValue,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            message: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setValue('message', '', {shouldValidate: true})
        axios.post('/api/messages', {...data, conversationId})
    };

    const handleUpload = (result: any) => {
        axios.post('/api/messages', {
            image: result?.info?.secure_url,
            conversationId
        })
    }

    return (
        <div className="py-4
        px-4
        bg-white
        border-t
        flex
        items-center
        gap-2
        lg:gap-4
        w-full">
            <CldUploadButton
                options={{maxFiles: 1}}
                onUpload={handleUpload}
                uploadPreset="z87rhw5a">

                <HiPhoto size={30} className="text-sky-500"/>

            </CldUploadButton>
            <form
                className="flex items-center gap-2 lg:gap-4 w-full"
                onSubmit={handleSubmit(onSubmit)}>
                <MessageInput placeholder="Write a message"
                              id="message"
                              errors={errors}
                              register={register}
                              required


                />
                <button type={"submit"}
                        className="
            rounded-full
            p-2
            bg-sky-500
            cursor-pointer
            transform rotate-90
            hover:bg-sky-600
            transition
            ">
                    <HiPaperAirplane size={18} className="text-white"/>
                </button>
            </form>
        </div>
    )
}

export default Form