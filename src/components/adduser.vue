<template>
        <div class="inpfield">
            <div class="btn"
			    @click='showUserAddWindow'
		    >Add to user</div>
            <div v-show="flagAddUser">
                <div class="form-group"
                    v-for='it, i in userinfo'
                    :key="i">
                    <label>
                        {{ it.label }}
                    </label>
                    <input type="text" 
                        v-model='it.value'
                        @input="validValue(i, $event)">
                </div>
                <div>
				    <button  class='btn btnUserBlock' @click='add'>Add</button>
				    <button class='btn btnUserBlock' @click='closeUserAddWindow'>Close</button>
                    <button class='btn btnUserBlock' @click='clear'>Clear</button>
			    </div>
            </div>
		</div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
    props: {
        label: String
    },
    data: function() {
        return {
            vals: '',
            flagAddUser: false
        }
    },
    methods: {
        edit(ind, event) {
            this.$emit('inputData', [ind, event.target.value])
        },
        add() {
            this.$emit('clickAddBtn')
        },
        showUserAddWindow() {
            this.flagAddUser = true
        },
        closeUserAddWindow() {
            this.flagAddUser = false
        },
        validValue(ind, event){
          let field = this.userinfo[ind];
          field.value = event.target.value;
          field.valid = field.pattern.test(field.value)
        },
        clear() {
            this.$emit('clearinput')
        }
    },
    computed: {
          ...mapGetters('mainstore', {userinfo: 'userinfodata'})
    }
}
</script>
<style scoped>
    .inpfield {
			width: 100%;
			margin:  5px 0px;

		}
    .form-group{
        display: flex;
        flex-direction: column;
    }
    .btn {
			background: grey;
			margin: 10px 10px;
			color: #fff;
			padding: 5px 15px;
			text-align: center;
			border-radius: 3px;
			cursor:pointer;
	}  


</style>