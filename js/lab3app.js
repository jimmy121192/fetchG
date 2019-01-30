var headers = new Headers();



var requestOptions = { method: 'GET',
               headers: headers,
               mode: 'cors',
               cache: 'default' };




var lab2app = new Vue({
    el:"#lab3app",
    data:{
        isSuccess: false,
        isError: false,
        classStr:"",
        users:[],
        imgSrc:""
    },
    created:function(){
        //
    },
    methods:{
        ChangeStatus: function(){
            // this.isSuccess = true;
            this.classStr ="success"
        },
        FetchDog: async function(){
            var resp = await fetch("http://viettop.tk/api/girl18.php",requestOptions);
            var json = await resp.blob();
            console.log(json)
            var objectURL = await URL.createObjectURL(json);
            this.imgSrc = objectURL;
            // this.imgSrc = json.url
        }
    }

})

