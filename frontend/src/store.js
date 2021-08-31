import create from 'zustand'

let basicUrl = 'http://localhost:4000'

const useStore = create(set => ({
	// bears: 0,
	// increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
	// removeAllBears: () => set({ bears: 0 })
}))
