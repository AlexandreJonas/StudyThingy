import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

type FormValues = {
    username: string
    email: string
    channel: string
}

export const YoutubeForm = () => {

    const form = useForm<FormValues>()
    const { register, control, handleSubmit, formState } = form
    const { errors } = formState
    // const {name, ref, onChange, onBlur} = register("username")

    const registerOptionsTest = {
        required: {
            value: true,
            message: "Channel is required akshually"
        },
        pattern: {
            value: /(?=(.*\d){2})/,
            message: "Invalid Channel format. At least two numbers are required"
        }
    }

    const idk = (data: FormValues) => {
        console.log("Form Submitted!", data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(idk)} noValidate>
                {/* <label htmlFor="username">Username</label>
                <input type="text" id="username" name={name} ref={ref} onChange={onChange} onBlur={onBlur}></input> */}

                <div className="form-control">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" {...register("username", {
                        required: {
                            value: true,
                            message: "Username is required"
                        }
                    })}></input>
                    <p className="error">{errors.username?.message}</p>
                </div>


                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Invalid Email format"

                        }
                    })}></input>
                    <p className="error">{errors.email?.message}</p>
                </div>

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input type="text" id="channel" {...register("channel", registerOptionsTest)}></input>
                    <p className="error">{errors.channel?.message}</p>
                </div>

                <button>Submit</button>
            </form >
            <DevTool control={control} />
        </div >
    )
}