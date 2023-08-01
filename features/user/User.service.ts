import request from '@/src/utils/request'

export const getUserByAccount = async (account: Account) => {
    try {
        const { data } = await request.get(`/users/${account}`)
        return data
    } catch (e: any) {
        throw new Error(e.message)
    }
}
