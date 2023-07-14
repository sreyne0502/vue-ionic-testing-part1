import { Account } from "@/types/home.type";

const state = {
  accounts: [] as Account[],
};
const getters = {};

const mutations = {
    setAccount(state: { accounts: Account[]; }, data:Account[]){
        state.accounts = data;
    }
};

const actions = {
  async getAccounts({commit}) {

    const data = [
      {
        id: "0001",
        account: "123-12-1111111-1",
        accountName: "Dojin Kim",
        availableBalance: "5000000",
        currency: "USD",
      },
      {
        id: "0002",
        account: "123-12-222222-1",
        accountName: "Park Kim",
        availableBalance: "125000",
        currency: "USD",
      },
      {
        id: "0003",
        account: "123-12-333333-1",
        accountName: "Kimmy Hok",
        availableBalance: "45760000",
        currency: "KHR",
      },
      {
        id: "0004",
        account: "123-12-444444-1",
        accountName: "Domin Tra",
        availableBalance: "60000",
        currency: "KHR",
      },
    ] as Account[];
    
    console.log(data)
    
    commit("setAccount", data);

  },
};

export default {
    state,
    getters,
    mutations,
    actions
}
