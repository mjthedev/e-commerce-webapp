const user = {
    common: {
        firstName: 'Holly',
        lastName: 'Greene', 
        email: 'hollygreene@gmail.com',
        phoneNumber: '720-725-5126',
        sex: 'female',
        dob: '06-09-78'
    },
    settings: {
        hasNotifications: true,
        hasTwoFactor: false,
        rememberDevice: true,
        allowsTracking: false,
        hasReminders: true,
        allowContactSharing: false,
        blockedUsers: []
    }
}


function DoesSheLikeAppsSnoopingHerContacts(firstName, email, phoneNumber, allowContactSharing) {

    if(allowContactSharing) {
        console.log(`
            ${firstName} is ok with apps snooping her contacts. You can reach her by phone ${phoneNumber} or ${email}
        `)
    } else {
        console.log(`
        ${firstName} does not like apps snooping her contacts. Mind your own damn business!
        `)
    }
}

user.settings.blockedUsers.push(1234567890)

console.log(`${user.common.firstName} has blocked user: ${user.settings.blockedUsers}`)

// DoesSheLikeAppsSnoopingHerContacts(
//     user.common.firstName, 
//     user.common.email, 
//     user.common.phoneNumber,
//     user.settings.allowContactSharing
//     );
