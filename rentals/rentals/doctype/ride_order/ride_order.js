// Copyright (c) 2025, Yash and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
    onload(frm){
        console.log("On load")

    },

    setup(frm){
        console.log("On set up")
    },
	refresh(frm) {
        if(frm.doc.status === "New"){
            frm.add_custom_button("Accept",()=>{
                frm.set_value("status","Accepted");

                frm.save();
            },"Actions")
        
            frm.add_custom_button("Reject",()=>{
                frm.set_value("status","Rejected");

                frm.save();
            },"Actions")
        }
       
        
        console.log("On refresh");

	},
});
