const isExpired = (timeout, timestamp) => 
    Math.floor(new Date() - timestamp) > timeout

const timedMemoize = (method, timeout) => {
    const cache = {}
    const intervalHandler = setInterval(() => {
        const cacheItems = Object.keys(cache);

        if (cacheItems.length === 0) 
            return clearInterval(intervalHandler);
        
        cacheItems
        .forEach(key => {
            const { timestamp } = cache[key];
            if (isExpired(timeout, timestamp)) delete cache[key];
        })
    }, timeout);

    return (...arguments) => 
        (
            cache[JSON.stringify(arguments)] || 
            (
                cache[JSON.stringify(arguments)] = {
                    data: method(...arguments),
                    timestamp: new Date()
                }
            )
        ).data;
}

module.exports = timedMemoize;
