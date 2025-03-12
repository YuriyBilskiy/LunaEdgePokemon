type Props = {
    setIsOpenModal: (value: boolean) => void;
    selectedTeam: { value: string; label: string }[];
}

export const Modal: React.FC<Props> = ({ setIsOpenModal, selectedTeam }) => {
    return (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-70 flex justify-center items-center">
        <div className="bg-yellow-100 p-6 rounded-md shadow-md w-[400px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Your Pokémon Team</h2>
            <button className="text-red-400" onClick={() => setIsOpenModal(false)}>
              ✖
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {selectedTeam.map((pokemon, index) => (
              <div key={index} className="flex flex-col items-center border p-2 rounded-md shadow">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                  alt={pokemon.value}
                  width={80}
                  height={80}
                  className="mb-2"
                />
                <p className="text-sm font-semibold">{pokemon.value}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <button className="px-4 py-2 bg-gray-300 rounded-md mr-2" onClick={() => setIsOpenModal(false)}>
              Cancel
            </button>
            <button onClick={() => setIsOpenModal(false)} className="px-4 py-2 bg-yellow-300 text-white rounded-md">Save</button>
          </div>
        </div>
      </div>
    )
}
