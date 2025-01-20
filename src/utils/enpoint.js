import axios from "axios";

// ----------------------------------------------------------------------

export const fetcher = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axios.get(url, { ...config });

  return res.data;
};

export const fetcherPost = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axios.post(url, config.payload, { ...config });

  return res.data;
};

// ----------------------------------------------------------------------

export const endpoints = {
  friends: {
    list_friends: "https://randomuser.me/api/?results=20",
  },
};
