import { $, useComputed$, useSignal } from "@builder.io/qwik";



export const useCounter = ( initialValue: number ) => {

    const counter = useSignal(initialValue);

    const increaseCounter = $(() => {
        counter.value++;
    });

    const decreaseCounter = $(() => {
        counter.value--;
    });


    return {
        counter: useComputed$(() => counter.value ),

        increase: increaseCounter,
        decrease: decreaseCounter,
    };
}