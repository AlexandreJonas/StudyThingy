import { useForm } from "react-hook-form"
import {DevTool} from "@hookform/devtools"

export const YoutubeForm = () => {

    const form = useForm()
    const {register, control} = form
    // const {name, ref, onChange, onBlur} = register("username")

    return(
        <div>
            <form>
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