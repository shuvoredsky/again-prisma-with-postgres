import { prisma } from "./lib/prisma";


async function run() {
    // const createUser = await prisma.user.create({
    //     data:{
    //         name: 'Rahul chakrabrati',
    //         email: 'rahul@gmail.com'
    //     }
    // })

    // console.log("Created User: ", createUser )


    // crate post for user id = 1

    // const createPost = await prisma.post.create({
    //     data: {
    //         title: 'This is rahul title',
    //         content: "this is a big boss content",
    //         authorId: 2
    //     }
    // })

    // console.log("Post is created: ", createPost)

    // for profile created

    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: "i am single",
    //         dateOfBirth: new Date('2025-10-02'),
    //         userId: 2
    //     }
    // })

    // console.log('Profile create: ', createProfile)


    // const users = await prisma.user.findMany({
    //     // include:{
    //     //     posts: true,
    //     //     profile: true
    //     // },

    //     select: {
    //         posts: true,
    //         profile: true
    //     }


    // });


    // console.log(users)
    // console.dir(users, {depth: Infinity})


    // const updateUser = await prisma.profile.update({
    //     where:{
    //         userId: 2
    //     },
    //     data: {
    //         bio: 'full stack developer & graphics designer',
    //         dateOfBirth: new Date('2026-10-06')
    //     },
    //     select: {
    //         id: true,
    //         bio: true,
    //         user: {
    //             select:{
    //                 name: true,
    //                 email: true
    //             }
    //         }
    //     }
    // })

    // console.log('updated user: ', updateUser)


    // delete user

    // const deleteUser = await prisma.user.delete({
    //     where:{
    //         id: 1
    //     }
    // })

    // console.log(deleteUser)

    const getUserDataById = await prisma.user.findUnique({
        where:{
            id:1
        },
        include:{
            posts: true,
            profile: true
        }
    })

    console.log(getUserDataById)

}

run()