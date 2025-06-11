# Copyright (c) 2025, Yash and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class BookingRides(Document):
	pass

	def validate(self):
		total_am=0
		for item in self.items:
			total_am = total_am + item.distance
		self.total_amount = total_am  * self.rate 
	    
