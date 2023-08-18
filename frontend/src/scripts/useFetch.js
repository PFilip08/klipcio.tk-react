import useSWRImmutable from 'swr/immutable';

const fetcher = url => fetch(url).then(r => r.json())

const useFetch = (url) => {
    const {data, error} = useSWRImmutable(url, fetcher, {refreshInterval: 5000})
    return { loading: !data, error, data }
}

export default useFetch