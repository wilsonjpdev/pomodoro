import { createContext, ReactNode, useReducer, useState } from "react";
import { ActionTypes, Cycle, cyclesReducer } from '../reducers/cycles'

interface CreateCycleData {
    task: string;
    minutesAmount: number;
}

interface CyclesContextType {
    cycles: Cycle[];
    activeCycle: Cycle | undefined;
    activeCycleId: string | null;
    amountSecondsPassed: number;
    markCurrentCycleAsFinished: () => void;
    setSecondsPassed: (seconds: number) => void;
    createNewCycle: (data: CreateCycleData) => void;
    interruptCurrentCycle: () => void;
}

interface CyclesContextProviderProps {
    children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContextProvider({ children }: CyclesContextProviderProps) {
    const [cyclesState, dispatch] = useReducer(cyclesReducer, {
        cycles: [],
        activeCycleId: null
    })

    const [amountSecondsPassed, setAmmountSecondsPassed] = useState(0)

    const { cycles, activeCycleId } = cyclesState

    const activeCycle = cycles.find(cycle => cycle.id == activeCycleId)

    function setSecondsPassed(seconds: number) {
        setAmmountSecondsPassed(seconds)
    }

    function markCurrentCycleAsFinished() {
        dispatch({
            type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
            payload: {
                activeCycleId
            }
        })
    }

    function createNewCycle(data: CreateCycleData) {

        const id = String(new Date().getTime())
        const newCycle: Cycle = {
            id: id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date()
        }

        dispatch({
            type: ActionTypes.ADD_NEW_CYCLE,
            payload: {
                newCycle
            }
        })

        setAmmountSecondsPassed(0)
    }

    function interruptCurrentCycle() {
        dispatch({
            type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
            payload: {
                data: activeCycleId
            }
        })
    }

    return (
        <CyclesContext.Provider value={{
            cycles,
            activeCycle,
            activeCycleId,
            amountSecondsPassed,
            markCurrentCycleAsFinished,
            setSecondsPassed,
            createNewCycle,
            interruptCurrentCycle
        }}
        >
            {children}
        </CyclesContext.Provider>
    )
}
