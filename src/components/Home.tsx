import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../public/logo.svg";
import { Modal } from "./Modal";
import { Pokemon } from "../types/PokemonType";
import { Form } from "./Form";

export const Home = () => {

    const [pokemonsList, setPokemonsList] = useState<Pokemon[]>([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState<
      { value: string; label: string }[]
    >([]);
  
    useEffect(() => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=100")
        .then((response) => setPokemonsList(response.data.results))
        .catch((error) => console.error(error));
    }, []);
  
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center p-4"
      style={{ backgroundImage: `url('/pokemon.png')` }}
    >
      <div className="p-4">
        <img className="pb-4" width={400} height={400} src={logo} alt="logo" />
      </div>

      <div className="w-[1330px] mx-auto">
        <Form
          pokemonsList={pokemonsList}
          setSelectedTeam={setSelectedTeam}
          setIsOpenModal={setIsOpenModal}
        />

        {isOpenModal && (
          <Modal setIsOpenModal={setIsOpenModal} selectedTeam={selectedTeam} />
        )}
      </div>
    </div>
  );
};
