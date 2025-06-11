# Copyright (c) 2025, Yash and contributors
# For license information, please see license.txt

# import frappe
from frappe.website.website_generator import WebsiteGenerator


class Vehicle(WebsiteGenerator):
	pass

	def before_save(self):
			self.set_title()

	def set_title(self):
		self.title= self.make + self.model