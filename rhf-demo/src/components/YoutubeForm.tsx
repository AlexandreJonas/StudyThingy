import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

type FormValues = {
    username: string
    email: string
    channel: string
    channelDescription: string
}

export const YoutubeForm = () => {

    const form = useForm<FormValues>()
    const { register, control, handleSubmit, formState } = form
    const { errors } = formState

    //Register returns an object containing the following objects:
    // const {name, ref, onChange, onBlur} = register("username")

    // You can also create an object for just the register options for better readability
    const channelRegisterOptionsTest = {
        required: {
            value: true,
            message: "Channel is required akshually"
        },
        pattern: {
            value: /(?=(.*\d){2})/,
            message: "Invalid Channel format. At least two numbers are required"
        }
    }

    // In turn, it's also possible to create an object for the 'register' function as a whole for one field
    const channelDescriptionRegisterTest = register("channelDescription", {
        required: "Channel Description is required",
    })

    const idk = (data: FormValues) => {
        console.log("Form Submitted!", data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(idk)} noValidate>

                {/* Putting the 'register' object on the input is basically the same thing as below: */}
                {/* <label htmlFor="username">Username</label>
                <input type="text" id="username" name={name} ref={ref} onChange={onChange} onBlur={onBlur}></input> */}

                    {/* Standard example with the required function */}
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

                    {/* Example with the required and pattern validation */}
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

                    {/* Example with an object created just for the registerOptions for better readability */}
                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input type="text" id="channel" {...register("channel", channelRegisterOptionsTest)}></input>
                    <p className="error">{errors.channel?.message}</p>
                </div>

                    {/* Example with an object specifically to register the channelDescription field, including its registerOptions */}
                <div className="form-control">
                    <label htmlFor="channelDescription">Channel Description</label>
                    <input type="text" id="channelDescription" {...channelDescriptionRegisterTest}></input>
                    <p className="error">{errors.channelDescription?.message}</p>
                </div>

                <button>Submit</button>
            </form >
            <DevTool control={control} />
        </div >
    )
}