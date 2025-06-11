# Copyright (c) 2025, Yash and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Driver(Document):
	
	def before_save(self):

		self.full =self.first_name + " " +self.last_name

	def send_alert(self):
		print("Just sending messages")
