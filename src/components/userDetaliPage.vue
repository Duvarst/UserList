<template>
    <div class="userblock">
			<table class="table table-bordered">
				<tr v-for='(val, name, i) in userpagecopy'
                    :key=i>
					<td>{{name}}</td>
					<td>{{val}}</td>
				</tr>
			</table>
			<button class='btn btn_back'
				@click='clickBackBtn'
				>
				<span>Back</span>	
			</button>
		</div>
</template>
<script>
import {mapGetters} from "vuex";
export default {
    props: {
        id: Number
    },
    data: function() {
        return {

        }
    },
    methods:{
        clickBackBtn() {
            this.$emit('backFromMain')
        }
    },
    computed: {
        ...mapGetters('mainstore', {userList: 'userdata'}),
        userpagecopy(){
            let thisUser = this.userList.find(el => el.id === this.id)
            return thisUser;
        }
    }
}
</script>
<style scoped>
		table{
			border:  1px solid #000;
			width: 100%;
			border-collapse: collapse;
		}  
        td {
			border:  1px solid #000;
			padding: 10px 15px;
		}
        .btn {
			background: grey;
			margin: 10px 10px;
			color: #fff;
			padding: 5px 40px;
			text-align: center;
			border-radius: 3px;
			cursor:pointer;
		}
		.btn_back {
			margin-left: 0px ;
		}
</style>