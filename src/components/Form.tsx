import { Controller, useForm } from "react-hook-form";
import { formSchema } from "../client/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData } from "../types/FormData";
import { Pokemon } from "../types/PokemonType";
import SelectComponent from "./SelectComponent";
import { Input } from "./Input";
type Props = {
  pokemonsList: Pokemon[];
  setSelectedTeam: (value: { value: string; label: string }[]) => void;
  setIsOpenModal: (value: boolean) => void;
};
export const Form: React.FC<Props> = ({
  pokemonsList,
  setSelectedTeam,
  setIsOpenModal,
}) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      selectedPokemons: [],
    },
  });

  const onSubmit = (data: FormData) => {
    setIsOpenModal(true);
    setSelectedTeam(data.selectedPokemons);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        errors={errors.name?.message as string}
        register={register("name")}
        autoFocus={true}
        placeholder="Write your name"
      />
      <Input
        errors={errors.name?.message as string}
        register={register("lastName")}
        placeholder="Write your last name"

      />

      <div className="w-full mt-4">
        <label className="block mb-2">Select your Pokémons:</label>
        <Controller
          name="selectedPokemons"
          control={control}
          render={({ field }) => (
            <SelectComponent
              {...field}
              errors={errors.selectedPokemons?.message}
              options={pokemonsList.map((pokemon) => ({
                value: pokemon.name,
                label: pokemon.name,
              }))}
              isMulti
            />
          )}
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="mt-4 p-2 bg-amber-300 text-white rounded-md hover:bg-yellow-300"
        >
          Add your team
        </button>
      </div>
    </form>
  );
};
