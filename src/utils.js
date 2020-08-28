const Utils = {
   parseQueryParameters:function() {
        const length = window.location.search.length;
        if (length === 0) return null;
      
        const parametersObject = window.location.search
          .slice(1, length)
          .split("&")
          .reduce((agg, next) => {
            var arr = next.split("=");
            agg[arr[0]] = arr[1];
            return agg;
          }, {});
      
        return parametersObject;
      }
};