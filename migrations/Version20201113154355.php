<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201113154355 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA queues');
        $this->addSql('CREATE SEQUENCE queues.queues_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE queues.queues_participations_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE users_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE queues.queues (id INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE queues.queues_participations (id INT NOT NULL, client_id INT DEFAULT NULL, queue_id INT DEFAULT NULL, position INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_AAF359DE19EB6921 ON queues.queues_participations (client_id)');
        $this->addSql('CREATE INDEX IDX_AAF359DE477B5BAE ON queues.queues_participations (queue_id)');
        $this->addSql('CREATE TABLE rooms (uuid VARCHAR(255) NOT NULL, PRIMARY KEY(uuid))');
        $this->addSql('CREATE TABLE services_rooms (room_uuid VARCHAR(255) NOT NULL, service_uuid VARCHAR(255) NOT NULL, PRIMARY KEY(room_uuid, service_uuid))');
        $this->addSql('CREATE INDEX IDX_C043A0D4B27BBAC2 ON services_rooms (room_uuid)');
        $this->addSql('CREATE INDEX IDX_C043A0D41F3CE44A ON services_rooms (service_uuid)');
        $this->addSql('CREATE TABLE services (uuid VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, description TEXT NOT NULL, icon VARCHAR(255) NOT NULL, PRIMARY KEY(uuid))');
        $this->addSql('CREATE TABLE users (id INT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, discriminator VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_1483A5E9E7927C74 ON users (email)');
        $this->addSql('ALTER TABLE queues.queues_participations ADD CONSTRAINT FK_AAF359DE19EB6921 FOREIGN KEY (client_id) REFERENCES users (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE queues.queues_participations ADD CONSTRAINT FK_AAF359DE477B5BAE FOREIGN KEY (queue_id) REFERENCES queues.queues (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE services_rooms ADD CONSTRAINT FK_C043A0D4B27BBAC2 FOREIGN KEY (room_uuid) REFERENCES rooms (uuid) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE services_rooms ADD CONSTRAINT FK_C043A0D41F3CE44A FOREIGN KEY (service_uuid) REFERENCES services (uuid) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema) : void
    {

        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE queues.queues_participations DROP CONSTRAINT FK_AAF359DE477B5BAE');
        $this->addSql('ALTER TABLE services_rooms DROP CONSTRAINT FK_C043A0D4B27BBAC2');
        $this->addSql('ALTER TABLE services_rooms DROP CONSTRAINT FK_C043A0D41F3CE44A');
        $this->addSql('ALTER TABLE queues.queues_participations DROP CONSTRAINT FK_AAF359DE19EB6921');
        $this->addSql('DROP SEQUENCE queues.queues_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE queues.queues_participations_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE users_id_seq CASCADE');
        $this->addSql('DROP TABLE queues.queues');
        $this->addSql('DROP TABLE queues.queues_participations');
        $this->addSql('DROP TABLE rooms');
        $this->addSql('DROP TABLE services_rooms');
        $this->addSql('DROP TABLE services');
        $this->addSql('DROP TABLE users');
        $this->addSql('DROP SCHEMA queues');
    }
}
