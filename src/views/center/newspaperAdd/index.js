// import cropperUpload from '../../../components/cropperUpload/index.vue'
import {
    getUserListPage
} from '../../../api/api';
export default {
    data () {
        return {
            isLoading: false,
            isEdit: false,
            formItem: {
                name:'',
                url:'',
                picUrl:'',
                // created:'',
                paperTime:'',
                // imagesarr:['https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar']
            },
            ruleValidate:{
                name:[{required: true, message: '请输入名称', trigger: 'blur'}],
                picUrl:[
                    {required: true, message: '请输入链接', trigger: 'blur'},
                    { type: 'url', message: '请输入正确的链接', trigger: 'blur' }
                ]
            },
            paperTimeOptions :{
                disabledDate (date) {
                    return date && date.valueOf() > Date.now();
                }
            }
        }
    },
    components: {
        // cropperUpload
    },
    mounted() {
    },
    created(){
        this.isEdit = false
        // console.log('queryId: ' + this.$route.query.id);
        if(this.$route.query.id){
        this.isEdit = true
        this.getDataArrayList(this.$route.query.id);
        }
    },
    methods: {
        goBack(){
            this.$router.push('/newspaper');
            // this.$router.go(-1);
        },
        handleSubmit (name) {
            // this.$Message.success('Success!');
            var _self = this
            this.$refs[name].validate((valid) => {
                if (valid) {
                    // this.$Message.success('提交成功!');
                    if (this.isEdit) {
                        _self.commitDataForEdit();
                    } else {
                        this.commitDataForAdd();
                    }
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        },
        getDataArrayList (id){
            // let para = {
            //     page: 1
            // };
            // getUserListPage(para).then((res) => {
            //     var tableData = res.data.users[id];
            //     console.log('tableData: '+ JSON.stringify(tableData))
            //     this.formItem.name = tableData.name
            // });

            this.$http.get("/epaper/"+id,{
            }).then((response) => {
                // console.log(response);
                if (response.data.code == 200) {
                    this.formItem = response.data.data
                    
                } else {
                    // this.$Notice.error({
                    //   title: '错误',
                    //   desc: response.data.message || '数据列表请求错误'
                    // })
                }
            },(error)=>{
                console.log(error);
            })
    
        },
        commitDataForAdd() {
        
            this.$http.post("/epaper/save",
                this.formItem
            ).then((response) => {
                // console.log(response);
                if (response.data.code == 200) {
                    // this.$Message.success('提交成功!');
                    this.$refs['formItem'].resetFields();
                    this.goBack()
                
                } else {
                    this.$Notice.error({
                        title: '错误',
                        desc: response.data.message || '数据列表请求错误'
                    })
                    // this.errorProcess(response.data)
                }
            },(error)=>{
                console.log(error);
            })
        },
        commitDataForEdit() {
            
            var _id = this.$route.query.id
            this.$http.put("/epaper/update/",
                this.formItem
            ).then((response) => {
                // console.log(response);
                if (response.data.code == 200) {
                    // this.$Message.success('提交成功!');
                    var _id = this.$route.query.id
                    this.goBack()
                
                } else {
                    this.$Notice.error({
                        title: '错误',
                        desc: response.data.message || '数据列表请求错误'
                    })
                    // this.errorProcess(response.data)
                }
            },(error)=>{
                console.log(error);
            })
        },
        dateModify (date) {
            this.formItem.paperTime = date;
        },
        handleReset (name) {
            this.$refs[name].resetFields();
            this.goBack()
        },
        onError (error, fileid, ki) {
            this.$Notice.error({
                title: '错误',
                desc: error.message || '图片上传错误！'
            })
        },
        onSuccess (response, fileid, ki) {
            if (response.path) {
            this.$set(this.formTop.imagesarr, ki, response.path)
            }
        },
    }
}
