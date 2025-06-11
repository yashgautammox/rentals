// Copyright (c) 2025, Yash and contributors
// For license information, please see license.txt

frappe.ui.form.on("Booking Rides", {
	refresh(frm) {

	},
    rate(frm){
        frm.trigger("update_total_amount")
    },
    update_total_amount(frm){
         total_am=0;
        for(let item of frm.doc.items){
            total_am+=item.distance;
        }
        total_am*=frm.doc.rate;
        frm.set_value("total_amount",total_am);

    }
});


frappe.ui.form.on("Ride Order Items",{

    refresh(frm){

    },
    distance(frm){
            frm.trigger("update_total_amount")
       
    },

    items_remove(frm){
        frm.trigger("update_total_amount")
    },

    items_add(frm){
        frm.trigger("update_total_amount")
    }
})
