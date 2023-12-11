import type { User, ReturnJSONAuth } from "@/interfaces"

const VALID_LOGINID = "bow"
const VALID_PASSWORD = "wow"
const VALID_USER = {
    id: 1234,
    name: "山本五郎",
    loginId: "bow",
    password: "",
}

export default defineEventHandler(
    async (event): Promise<ReturnJSONAuth> => {
        let resultVal = 0
        let tokenVal = "HogeFuga"
        let loginUser: User | null = null
        try {
            const body = await readBody(event)
            resultVal = 1
            if (body.loginId == VALID_LOGINID && body.password == VALID_PASSWORD) {
                loginUser = VALID_USER
            }
        }
        catch (err) {
            console.log(err)
        }
        return {
            result: resultVal,
            token: tokenVal,
            user: loginUser,
        }
    }
)