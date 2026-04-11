import { useForm } from "react-hook-form"
import {DevTool} from "@hookform/devtools"

type FormValues = {
    username: string
    email: string
    channel: string
}

export const YoutubeForm = () => {

    const form = useForm<FormValues>()
    const {register, control, handleSubmit} = form
    // const {name, ref, onChange, onBlur} = register("username")

    const idk = (data: FormValues) => {
        console.log("Form Submitted!", data)
    }

    return(
        <div>
            <form onSubmit={handleSubmit(idk)}>
                {/* <label htmlFor="username">Username</label>
                <input type="text" id="username" name={name} ref={ref} onChange={onChange} onBlur={onBlur}></input> */}

                <label htmlFor="username">Username</label>
                <input type="text" id="username" {...register("username")}></input>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")}></input>

                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" {...register("channel")}></input>

                <button>Submit</button>
            </form>
            <DevTool control={control}/>
        </div>
    )
}