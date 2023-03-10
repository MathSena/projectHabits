interface HabitProps{
    completed: number
}

export function Habit(props: HabitProps){
    return(
        <div className="bg-zinc-900 w-20 h-20 text-white rounded m-2 flex items-center justify-center">
        <p>Habit {props.completed}</p>
        </div>
    )
}