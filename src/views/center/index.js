export default {
    data () {
        return {
            self: this,
            tableData: [],
            pageSize: 10, //每页的个数
            pageIndex: 1, //列表当前页
            dataTotal: 0, //列表数据总数total
            dataList: [],
        }
    },
    computed:{
        // pageCount:function(){
        //     let remainder=this.dataTotal%this.pageSize;
        //     if(remainder){
        //         return Math.ceil(this.dataTotal/this.pageSize);
        //     }else{
        //         return Math.floor(this.dataTotal/this.pageSize);
        //     }
        // }
    },
    mounted() {
        this.mockTableData();
    },
    created(){
        // this.mockTableData();
    },
    methods: {
        mockTableData () {

            var _parm = "size="+this.pageSize+"&page="+(this.pageIndex - 1)+"&params="
            this.$http.get("/epaper/?"+_parm, {
            }).then((response) => {
                if (response.data.code == 200) {
                    this.dataList = response.data.data.content
                    this.dataTotal = response.data.data.totalElements;
                } else {
                    this.$Notice.error({
                        title: '错误',
                        desc: response.data.message || '数据列表请求错误'
                    })
                }
            }, (err) => {
                this.$Notice.error({
                title: '错误',
                desc: err.message || '数据列表请求错误'
                })
            })
        }
    }
}
