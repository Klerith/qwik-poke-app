import { Slot, component$, useContextProvider, useStore, useVisibleTask$ } from '@builder.io/qwik';

import { type PokemonGameState, PokemonGameContext } from './pokemon-game.context';
import { type PokemonListState, PokemonListContext } from './pokemon-list.context';


export const PokemonProvider = component$(() => {

    const pokemonGame = useStore<PokemonGameState>({
        pokemonId: 4,
        isPokemonVisible: true,
        showBackImage: false,
    });

    const pokemonList = useStore<PokemonListState>({
        currentPage: 1,
        isLoading: false,
        pokemons: [],
    });
    
    useContextProvider(PokemonGameContext, pokemonGame);
    useContextProvider(PokemonListContext, pokemonList);

    
    useVisibleTask$(() => {
        if ( localStorage.getItem('pokemon-game') ) {
            const {
                isPokemonVisible = true,
                pokemonId = 10,
                showBackImage = false,
            } = JSON.parse(localStorage.getItem('pokemon-game')!) as PokemonGameState;
            
            pokemonGame.isPokemonVisible = isPokemonVisible;
            pokemonGame.pokemonId = pokemonId;
            pokemonGame.showBackImage = showBackImage;
        }
        
    });

    useVisibleTask$(({ track }) => {
        track( () => [ pokemonGame.isPokemonVisible, pokemonGame.pokemonId, pokemonGame.showBackImage ]);

        localStorage.setItem('pokemon-game', JSON.stringify( pokemonGame ));
    });


    return <Slot />;
});
